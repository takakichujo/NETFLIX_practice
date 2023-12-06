import { FC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import styles from './index.module.scss';
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
        />
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
        />
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
        />
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
      <input type='submit' value='ログイン' className={styles.LoginSubmit} />
    </form>
  );
};
//reactUseFormを使わないパターンで書いた為、残しています。
// import { FC } from 'react';
// // import { useForm, SubmitHandler } from 'react-hook-form';
// import { useNavigate } from 'react-router-dom';
// import { useState } from 'react';
// import styles from './style.module.scss';

// export const Login: FC = () => {
//   const navigate = useNavigate();
//   const [userName, setUserName] = useState('');
//   const [password, setPassword] = useState('');
//   const [errorPassword, setErrorPassword] = useState('');
//   const [rePassword, setRePassword] = useState('');
//   const [errorRePassword, setErroeRePassword] = useState('');
//   const [errorUserName, setErrorUserName] = useState('');
//   const [mail, setMail] = useState('');
//   const [errorMail, setErrorMail] = useState('');
//   const mailPattern =
//     /^[a-zA-Z0-9][a-zA-Z0-9.-]+[@][a-zA-Z0-9.-]+[.][a-zA-Z]+$/;
//   const userNamePattern = /^([a-zA-Z0-9]{8,15})$/;
//   const passwordPattern = /^([A-Za-z0-9]{10,})$/;
//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     if (
//       errorUserName === '' &&
//       errorPassword === '' &&
//       errorRePassword === '' &&
//       errorMail === ''
//     ) {
//       navigate('/Home');
//     }
//   };
//   const userNameHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const value = e.target.value;
//     setUserName(value);
//     setErrorUserName(
//       userNamePattern.test(value) ? '' : 'ユーザー名を正しく入力して下さい'
//     );
//   };
//   const passwordHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const value = e.target.value;
//     setPassword(value);
//     setErrorPassword(
//       passwordPattern.test(value) ? '' : 'パスワードを正しく入力してください'
//     );
//   };
//   const rePasswowrdHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const value = e.target.value;
//     setRePassword(value);
//     setErroeRePassword(
//       password === value ? '' : 'パスワードと一致していません。'
//     );
//   };
//   const mailHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const value = e.target.value;
//     setMail(value);
//     setErrorMail(
//       mailPattern.test(value) ? '' : 'メールアドレスを正しく入力してください'
//     );
//   };
//   return (
//     <form onSubmit={handleSubmit}>
//       <h1>ログイン</h1>
//       <div className={styles.Login}>
//         <label className={styles.LoginLabel}>userName</label>
//         <input
//           type='text'
//           className={styles.LoginInput}
//           onChange={userNameHandle}
//           value={userName}
//         ></input>
//         {<p className={styles.LoginError}>{errorUserName}</p>}
//         <label className={styles.LoginLabel}>password</label>
//         <input
//           type='password'
//           className={styles.LoginInput}
//           onChange={passwordHandle}
//           value={password}
//         ></input>
//         {<p className={styles.LoginError}>{errorPassword}</p>}
//         <label className={styles.LoginLabel}>repassword</label>
//         <input
//           type='password'
//           className={styles.LoginInput}
//           onChange={rePasswowrdHandle}
//           value={rePassword}
//         ></input>
//         {<p className={styles.LoginError}>{errorRePassword}</p>}
//         <label className={styles.LoginLabel}>mail</label>
//         <input
//           type='mail'
//           className={styles.LoginInput}
//           value={mail}
//           onChange={mailHandle}
//         />
//         {<p className={styles.LoginError}>{errorMail}</p>}
//       </div>
//       <input
//         type='submit'
//         value='ログイン'
//         className={styles.LoginSubmit}
//       ></input>
//     </form>
//   );
// };
