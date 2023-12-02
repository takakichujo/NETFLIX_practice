import { FC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import styles from './style.module.scss';
type FormData = {
  userName: string;
  password: string;
  rePassword: string;
  mail: string;
};
export const Login: FC = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<FormData>({
    mode: 'onChange',
    defaultValues: {
      userName: '',
      password: '',
      rePassword: '',
      mail: '',
    },
  });
  const onSubmit: SubmitHandler<FormData> = () => {
    if (
      !errors.userName &&
      !errors.password &&
      !errors.rePassword &&
      !errors.mail
    ) {
      navigate('/Home');
      reset();
    }
  };
  const password = watch('password', 'default value');
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>ログイン</h1>
      <div className={styles.Login}>
        <label className={styles.LoginLabel}>userName</label>
        <input
          type='text'
          className={styles.LoginInput}
          {...register('userName', {
            required: 'ユーザー名は必須です',
            pattern: {
              value: /^([a-zA-Z0-9]{8,15})$/,
              message:
                'ユーザー名は半角英数字8文字以上、15文字以下で入力してください',
            },
          })}
        ></input>
        {errors.userName && (
          <p className={styles.LoginError}>{errors.userName.message}</p>
        )}
        <label className={styles.LoginLabel}>password</label>
        <input
          type='password'
          className={styles.LoginInput}
          {...register('password', {
            required: 'パスワードは必須です',
            pattern: {
              value: /^([A-Za-z0-9]{10,})$/,
              message: 'パスワードは半角英数字、10文字以上で入力してください',
            },
          })}
        ></input>
        {errors.password && (
          <p className={styles.LoginError}>{errors.password.message}</p>
        )}
        <label className={styles.LoginLabel}>repassword</label>
        <input
          type='password'
          className={styles.LoginInput}
          {...register('rePassword', {
            required: '確認のパスワードを入力してください',
            validate: (value) =>
              value === password || 'パスワードが一致しません',
          })}
        ></input>
        {errors.rePassword && (
          <p className={styles.LoginError}>{errors.rePassword.message}</p>
        )}
        <label className={styles.LoginLabel}>mail</label>
        <input
          type='mail'
          className={styles.LoginInput}
          {...register('mail', {
            required: 'メールアドレスを入力してください',
            pattern: {
              value: /^[a-zA-Z0-9][a-zA-Z0-9.-]+[@][a-zA-Z0-9.-]+[.][a-zA-Z]+$/,
              message: 'メールアドレスを正しく入力してください',
            },
          })}
        />
      </div>
      {errors.mail && (
        <p className={styles.LoginError}>{errors.mail.message}</p>
      )}
      <input
        type='submit'
        value='ログイン'
        className={styles.LoginSubmit}
      ></input>
    </form>
  );
};
