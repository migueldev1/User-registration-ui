import { useEffect, useState, useRef } from "react";
import "./style.css";
import Excluir from "../../assets/excluir.png";
import Editar from "../../assets/botao-editar.png";
import api from "../../services/api";

function Home() {
  const [users, setUsers] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editUserId, setEditUserId] = useState(null);

  const inputName = useRef();
  const inputAge = useRef();
  const inputEmail = useRef();

  async function getUsers() {
    const usersFromApi = await api.get("/usuarios");

    setUsers(usersFromApi.data);
  }

  async function createUsers() {
    await api.post("/usuarios", {
      name: inputName.current.value,
      age: inputAge.current.value,
      email: inputEmail.current.value,
    });
    clearForm();
    getUsers();
  }

  async function updateUser() {
    await api.put(`/usuarios/${editUserId}`, {
      name: inputName.current.value,
      age: inputAge.current.value,
      email: inputEmail.current.value,
    });

    setEditMode(false);
    setEditUserId(null);
    clearForm();
    getUsers();
  }

  async function deleteUsers(id) {
    await api.delete(`/usuarios/${id}`);
    getUsers();
  }

  function startEditing(user) {
    setEditMode(true);
    setEditUserId(user.id);
    inputName.current.value = user.name;
    inputAge.current.value = user.age;
    inputEmail.current.value = user.email;
  }

  function clearForm() {
    inputName.current.value = "";
    inputAge.current.value = "";
    inputEmail.current.value = "";
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="container">
      <form>
        <h1>{editMode ? "Editar Usuário" : "Cadastre-se"}</h1>
        <input
          name="name"
          type="text"
          placeholder="Digite seu Nome"
          ref={inputName}
        />
        <input
          name="age"
          type="number"
          placeholder="Digite sua Idade"
          ref={inputAge}
        />
        <input
          name="email"
          type="email"
          placeholder="Digite seu Email"
          ref={inputEmail}
        />
        <button onClick={editMode ? updateUser : createUsers} type="button">
          {editMode ? "Salvar Edição" : "Cadastrar"}
        </button>
      </form>

      {users.map((user) => {
        return (
          <div key={user.id} className="card">
            <div>
              <p>
                Nome: <span>{user.name}</span>
              </p>
              <p>
                Idade: <span>{user.age}</span>
              </p>
              <p>
                Email: <span>{user.email}</span>
              </p>
            </div>
            <div className="card-buttons">
              <button onClick={() => startEditing(user)}>
                <img src={Editar} alt="Editar" />
              </button>

              <button onClick={() => deleteUsers(user.id)}>
                <img src={Excluir} alt="Excluir" />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
