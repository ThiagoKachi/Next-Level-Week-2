import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars1.githubusercontent.com/u/61670495?s=460&u=9b335f52bff80b35370bba23120961c3f533f956&v=4" alt="Thiago Kachinsky" />
                <div>
                    <strong>Thiago kachinsky</strong>
                    <span>Química</span>
                </div>
            </header>

            <p>
                Entusiasta das melhores tecnologias de quimica avançada
                <br /> <br />
                Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas atraves de experiências.
            </p>

            <footer>
                <p>
                    Preço/Hora <strong> R$80,00 </strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp" />
                    Entrar em Contato
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem;