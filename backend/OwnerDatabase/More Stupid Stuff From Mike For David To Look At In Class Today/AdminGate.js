import Login from './Login';
import AdminList from './AdminList';
import LoginGate from './LoginGate';

const AdminGate = props = (
    <div>
        <LoginGate>
            <AdminList />
        </LoginGate>
    </div>
);


export default AdminGate;
