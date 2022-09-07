import '../navbarLateral/navbarLateral.css';

export function navbarLateral() {
  return (
    <div className="container">
      {/* LOGO + NAV + ICONS */}
      <div className="containerInterno">
        {/* LOGO */}
        <div className="containerImgLogo">
          <img src="../Imagem/logo.png" alt="logo, rota ativa" />
        </div>
        {/* BOTÕES */}
        <div className="containerNavbar space-y-4">
          {/* BOTÃO 01 */}
          <button className="buttonNavbarLateral">
            {/* CRIAÇÃO DO SIMBOLO DO BOTÃO 1 */}
            <svg viewBox="0 0 24 24" className="iconsConfig">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              {/* CRIAÇÃO DO SIMBOLO DO BOTÃO 1 PT2 */}
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
          </button>
          {/* BOTÃO 02 */}
          <button className="buttonNavbarLateral">
            <svg viewBox="0 0 24 24" className="iconsConfig">
              {/* CRIAÇÃO DO SIMBOLO DO BOTÃO 2 */}
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
              {/* CRIAÇÃO DO SIMBOLO DO BOTÃO 2 PT2 */}
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
            </svg>
          </button>
          {/* BOTÃO 03 */}
          <button className="buttonNavbarLateral">
            <svg viewBox="0 0 24 24" className="iconsConfig">
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              <line x1="12" y1="11" x2="12" y2="17"></line>
              <line x1="9" y1="14" x2="15" y2="14"></line>
            </svg>
          </button>
          {/* BOTÃO 04 */}
          <button className="buttonNavbarLateral">
            {/* CRIAÇÃO DO SIMBOLO DO BOTÃO 3 */}
            <svg viewBox="0 0 24 24" className="iconsConfig">
              {/* CRIAÇÃO DO SIMBOLO DO BOTÃO 3 PT2 - QUADRADO DO LADO ESQUERDO SUPERIOR */}
              <rect x="3" y="3" width="7" height="7"></rect>
              {/* CRIAÇÃO DO SIMBOLO DO BOTÃO 3 PT2 - QUADRADO DO LADO DIREITO SUPERIOR */}
              <rect x="14" y="3" width="7" height="7"></rect>
              {/* CRIAÇÃO DO SIMBOLO DO BOTÃO 3 PT2 - QUADRADO DO LADO DIREITO INFERIOR */}
              <rect x="14" y="14" width="7" height="7"></rect>
              {/* CRIAÇÃO DO SIMBOLO DO BOTÃO 3 PT2 - QUADRADO DO LADO ESQUERDO INFERIOR */}
              <rect x="3" y="14" width="7" height="7"></rect>
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default navbarLateral;