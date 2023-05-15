import React from 'react';
import '@presentation/global/styles/global.scss';
import styles from './login.styles.scss';
import { Spinner } from '@presentation/ui/components/spinner/spinner';

export const Login: React.FC = () => {
  return (
    <div className={styles.login}>
      <header className={styles.header}></header>
      <form className={styles.form}>
        <label>
          Usuário:
          <div className={styles.inputWrap}>
            <input type="text" name="user" placeholder="Digite seu CPF" />
            <span className={styles.status}>✅</span>
          </div>
        </label>
        <label>
          Senha:
          <div className={styles.inputWrap}>
            <input type="text" name="password" placeholder="Digite sua senha" />
            <span className={styles.status}>✅</span>
          </div>
        </label>
        <a href="" className={styles.linkRight}>
          Esqueceu sua senha?
        </a>
        <button>Entrar</button>
        <div className={styles.errorWrap}>
          <Spinner />
          <span>Error</span>
        </div>
        <a href="" className={styles.linkCenter}>
          Problemas com acesso?
        </a>
      </form>
      <footer className={styles.footer}></footer>
    </div>
  );
};
