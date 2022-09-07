import '../navbar/navbar.css';

export function navbar() {
    return (
        <div className="container">
        {/* NAVBAR */}
        <div className="containerSuperior">
          {/* NAVBAR - SUPERIOR */}
          <div className="navbarSuperior">
            <a href="#" className="a1">Usuários</a>
            <a href="#" className="a2">Despesas</a>
          </div>
          {/* LOGON */}
          <div className="containerLogon">
            <button id="buttonLogout">Logout</button>
            {/* PERFIL - STATUS */}
            <button id="buttonUser">
              <span className="containerFoto">
                {/* PERFIL - IMAGEM */}
                <img id="fotoUser" src="../Imagem/foto.jpeg" alt="Usuário" />
                {/* PERFIL - CONFIGURAÇÃO DE USUÁRIO */}
               {/* <span className="absolute right-0 -mb-0.5 bottom-0 w-2 h-2 rounded-full"></span> */}
              </span>
              <span className="nomeUser">Matheus Dias S</span>
              {/* PERFIL - CONFIGURAÇÃO DE USUÁRIO - ICONE DE DROP */}
              <svg viewBox="0 0 24 24" id="iconeUser">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
          </div>
        </div>
        {/* NAVBAR - RELATÓRIO CENTRAL */}
        <div className="containerPrincipal">
          <div className="containerPrincipalSecundario">
            {/* RELATÓRIO CENTRAL */}
            <div className="containerCentral">
              <div className="containerUserMenuItens">
                {/* NAVBAR - FOTO DO MENU */}
                <div className="containerUserMenuItens">
                  <img src="../Imagem/foto.jpeg" className="fotoUserMenuItens" alt="profile" />
                  Matheus Dias
                </div>
                {/* NAVBAR - SALDO DA CONTA */}
                <div className="containerSaldo">
                  <div className="containerTextoSaldo">
                    <div className="tituloSaldo">Saldo da conta:</div>
                    <div className="saldo">R$2,794.00</div>
                  </div>
                  {/* NAVBAR - SALDO DA CONTA - BOTÃO DE DROP */}
                  <button id="buttonDrop" className=" border">
                    {/* NAVBAR - ICONE DE DROP */}
                    <svg viewBox="0 0 24 24" id="iconeSaldo">
                      <circle cx="12" cy="12" r="1"></circle>
                      <circle cx="19" cy="12" r="1"></circle>
                      <circle cx="5" cy="12" r="1"></circle>
                    </svg>
                  </button>
                </div>
              </div>
              {/* NAVBAR - MENU - ITENS */}
              <div className="itensDoMenu">
                <a href="../index.html" className="item01">Atividades do Usuário</a>
                <a href="#" className="item02">Relatório de Vagas</a>
              </div>
              </div>
            </div>
          </div>
        </div>
    )
}

export default navbar;