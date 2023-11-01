import { useState, useMemo } from 'react';
import { TEmailSend } from '../definitions';
import { POST } from '../../api/send/route';

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
  // value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

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

  const onSubmit = async () => {
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));
    try {
      await POST(values);
      setTouched({});
      setState(initState);
    } catch (error: any) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: error.message,
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
