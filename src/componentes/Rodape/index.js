import "./Rodape.css"

const Rodape = () => {
   return (
      <footer className="footer">
         <section>
            <ul>
               <li>
                  <a href="facebook.com" target="_blank">
                     <img src="./imagens/fb.png" alt="Facebook" />
                  </a>
               </li>
               <li>
                  <a href="twitter.com" target="_blank">
                     <img src="./imagens/tw.png" alt="twitter" />
                  </a>
               </li>
               <li>
                  <a href="instagram.com" target="_blank">
                     <img src="./imagens/ig.png" alt="Instagram"/>
                  </a>
               </li>
            </ul>
         </section>
         <section className="logo-organo">
            <img src="./imagens/logo.png" alt="Logo organo" />
         </section>
         <section>
            <p>
               Desenvolvido por Alura
            </p>
         </section>
      </footer>
   )
}

export default Rodape