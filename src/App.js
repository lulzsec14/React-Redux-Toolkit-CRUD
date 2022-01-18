import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addUser, deleteUser, updateUsername } from './features/Users';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [newUsername, setNewUsername] = useState('');

  const userDispatcher = useDispatch();

  const userList = useSelector((state) => state.users.value);

  return (
    <div className="App">
      <div className="addUser">
        <input
          tyoe="text"
          placeholder="Name"
          onChange={(event) => setName(event.target.value)}
        />
        <input
          tyoe="text"
          placeholder="Username"
          onChange={(event) => setUsername(event.target.value)}
        />
        <button
          onClick={() => {
            userDispatcher(
              addUser({
                id: userList[userList.length - 1].id + 1,
                name,
                username,
              })
            );
          }}
        >
          Add User
        </button>
      </div>
      <div className="displayUsers">
        {userList.map((user) => {
          return (
            <div>
              <h1>{user.name}</h1>
              <h3>
                {user.username} {user.id}
              </h3>
              <input
                tyoe="text"
                placeholder="New Username..."
                onChange={(event) => setNewUsername(event.target.value)}
              />
              <button
                onClick={() => {
                  userDispatcher(
                    updateUsername({ id: user.id, username: newUsername })
                  );
                }}
              >
                Update Username
              </button>
              <button
                onClick={() => {
                  userDispatcher(deleteUser({ id: user.id }));
                }}
              >
                Delete User
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
