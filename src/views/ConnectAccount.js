import { useState } from "react";


export function ConnectAccount({connect}){
    const [ secret, setSecret ] = useState('');

    return(
        <div className='launchApp'>
            <div className="details">
                <p>
            Welcome to AlgoXBet        
                </p>
                <h4>AlgoXBet is a betting game where users bet Algos and try to guess a number......
                 More than 100 countries and territories supported with over 60
              currencies, so users pay in their local currency,<br/>
              Support for all major blockchains, tokens and stable-coins. 80+
              cryptocurrencies in total</h4>

               <div className="social">
            <a href="#">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-behance-square"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-whatsapp"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-pinterest"></i>
            </a>
          </div>
            
            </div>
            <div>

            <div className="mnemonic">
                <textarea 
                    placeholder="Paste Mnemonic Key"
                    onChange={ e => setSecret(e.target.value) }
                />
                <br/>
                <button className="launch-button"
                    onClick={() => connect(secret.trim(), true)}
                >Connect</button><br/>
                <h4>Or</h4>
            </div>
            <button className="bton" onClick={() => connect()}>Connect To MyAlgoConnect Wallet</button>
            </div>
            
        </div>
    );
};