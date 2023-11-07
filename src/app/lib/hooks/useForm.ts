import { useState, useMemo } from 'react';
import { TEmailSend } from '../definitions';
import { POST } from '../../api/send/route';
import { Theme, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initValues: TEmailSend = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

type TState = { error: string; isLoading: boolean; values: TEmailSend };

const initState: TState = { isLoading: false, error: '', values: initValues };

export default function useForm() {
  const [state, setState] = useState<TState>(initState);
  const [touched, setTouched] = useState({});

  const { values, isLoading, error } = state;

  const validateEmail = (value: string) =>
    value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g);

  const isInvalidEmail = useMemo(() => {
    if (state.values.email === '') return false;

    return validateEmail(state.values.email) ? false : true;
  }, [state.values.email]);

  const onBlur = ({ target }: any) =>
    setTouched((prev) => ({ ...prev, [target.name]: true }));

  const handleChange = ({ target }: any) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));

  const onNotify = (message: string, theme?: Theme) =>
    toast(`${message}`, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: theme || 'light',
    });

  const onSubmit = async () => {
    if (values.name && values.message) {
      if (values.email && !isInvalidEmail) {
        setState((prev) => ({
          ...prev,
          isLoading: true,
        }));

        try {
          await POST(values);
          setTouched({});
          setState(initState);
          onNotify('Email was sendding successfully!');
        } catch (error: any) {
          setState((prev) => ({
            ...prev,
            isLoading: false,
            error: error.message,
          }));
          onNotify('Sorry, something was wrong, try again.', 'colored');
        }
      } else {
        setTouched((prev) => ({
          ...prev,
          email: true,
        }));
      }
    } else {
      setTouched((prev) => ({
        ...prev,
        name: true,
        message: true,
      }));
    }
  };

  return {
    state,
    setState,
    touched,
    setTouched,
    handleChange,
    onBlur,
    onSubmit,
    isInvalidEmail,
  };
}
