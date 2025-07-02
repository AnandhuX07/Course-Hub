import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./Admin_user.css";

const Admin_user = () => {
    const [users, setUsers] = useState([]);

    const fetchUsers = () => {
        axios.get('http://127.0.0.1:8000/api/users/')
            .then(res => setUsers(res.data))
            .catch(err => console.error(err));
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const deleteUser = (id) => {
        if (window.confirm('Are you sure you want to delete this user?')) {
            axios.delete(`http://127.0.0.1:8000/api/users/delete/${id}/`)
                .then(() => {
                    alert('User deleted successfully');
                    fetchUsers(); // Refresh the table
                })
                .catch(err => alert('Error deleting user'));
        }
    };

    return (
        <div className="user-page">
            <h2 className="user-heading">All Registered Users</h2>
            <table className="user-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Admin</th>
                        <th>Date Joined</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.is_staff ? 'Yes' : 'No'}</td>
                            <td>{new Date(user.date_joined).toLocaleDateString()}</td>
                            <td>
                                <button
                                    className="delete-button"
                                    onClick={() => deleteUser(user.id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Admin_user;
