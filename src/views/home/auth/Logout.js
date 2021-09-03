import "./styles.scss";
import Authentication from '../../../Authentication';

export const LogoutView = () => {
  Authentication.signOut();
  return (
    <>
      <p style={{fontSize: 20, position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>
        <i className="fas fa-spinner fa-spin"></i> &nbsp;
        <span>Signing out...</span>
      </p>
    </>
  )
}

export default LogoutView;