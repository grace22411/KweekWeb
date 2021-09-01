import "./styles.scss";
import Authentication from '../../../Authentication';

export const LogoutView = () => {
  Authentication.signOut();
}

export default LogoutView;