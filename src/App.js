import logo from './logo.svg';
import './App.css';

const NavPanelItems = ({children = 'ItemX', href = '#'}) => 
<li><a class="header__item" href={href}>{children}</a></li>

const BurgerMenulItems = ({children = 'ItemX', href = '#'}) => 
<li><a class="menu__item" href={href}>{children}</a></li>

const Card = ({img = './images/img2.jpeg', headerText = 'Lorem', children = 'Lorem ipsum'}) => 
<div class="card">
    <img class='card__img' src={img} alt="card image"/>
    <h3>{headerText}</h3>
    <p>{children}</p>
    <button>Go</button>
</div>

const Aside = ({children = '0', classNum = '0', asideText = 'aside'}) => 
<aside class={asideText + classNum} ><p>{asideText}{children}</p></aside>

const Footer = ({children}) => 
<footer class="footer"><p>{children}</p></footer>


function App() {
  return (
    <div className="App">
       <header class="header">
            <img class='header__img' src="./images/img1.jpeg" alt="monke"/>

            <nav class="hamburger__menu">
                <input id="menu__toggle" type="checkbox"/>
                    <label class="menu__btn" for="menu__toggle">
                        <span></span>
                    </label>

                    <ul class="menu__box">
                        {/* <li><a class="menu__item" href="#">Головна</a></li>
                        <li><a class="menu__item" href="#">Проекти</a></li>
                        <li><a class="menu__item" href="#">Команда</a></li>
                        <li><a class="menu__item" href="#">Блог</a></li>
                        <li><a class="menu__item" href="#">Контакти</a></li> */}
                        <BurgerMenulItems>Головна</BurgerMenulItems>
                        <BurgerMenulItems>Проекти</BurgerMenulItems>
                        <BurgerMenulItems>Команда</BurgerMenulItems>
                        <BurgerMenulItems>Блог</BurgerMenulItems>
                        <BurgerMenulItems>Контакти</BurgerMenulItems>
                      </ul>
            </nav>
        
            <nav class="header__items">
                <ul class="header__list">
                    {/* <li><a class="header__item" href="#">Головна</a></li>
                    <li><a class="header__item" href="#">Проекти</a></li>
                    <li><a class="header__item" href="#">Команда</a></li>
                    <li><a class="header__item" href="#">Блог</a></li>
                    <li><a class="header__item" href="#">Контакти</a></li> */}
                    <NavPanelItems>Головна</NavPanelItems>
                    <NavPanelItems>Проекти</NavPanelItems>
                    <NavPanelItems>Команда</NavPanelItems>
                    <NavPanelItems>Блог</NavPanelItems>
                    <NavPanelItems>Контакти</NavPanelItems>
                  </ul>
            </nav>
        </header>
       <main class="wrapper">
            {/* <aside class="aside1"><p>Aside1</p></aside> */}
            <Aside classNum = '1'>1</Aside>
            <section class="main">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, ducimus animi. Non veritatis ab quasi consectetur, laboriosam aliquam recusandae odio in deleniti veniam ex, saepe minus fugiat perferendis doloribus! Alias.</p>
                <h2>OUR WORK</h2>
                <section class="card__container">
                    {/* <div class="card">
                        <img class='card__img' src="./images/img2.jpeg" alt="card image"/>
                        <h3>Lorem ipsum dolor elit. </h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima accusamus corporis omnis officia itaque ratione in doloribus, dolore obcaecati ipsam quasi adipisci dolorem!</p>
                        <button>Go</button>
                    </div>
                    <div class="card">
                        <img class='card__img' src="./images/img2.jpeg" alt="card image"/>
                        <h3>Lorem ipsum dolor elit. </h3>
                        <p>Lorem ipsum dolor sit amet elit.</p>
                        <button>Go</button>
                    </div>
                    <div class="card">
                        <img class='card__img' src="./images/img2.jpeg" alt="card image"/>
                        <h3>Lorem ipsum dolor elit. </h3>
                        <p>Lorem ipsum dolor sit amet. dolore obcaecati ipsam quasi adipisci dolorem!</p>
                        <button>Go</button>
                    </div>
                    <div class="card">
                        <img class='card__img' src="./images/img2.jpeg" alt="card image"/>
                        <h3>Lorem ipsum dolor elit. </h3>
                        <p>Lorem ipsum dolor ipsam quasi adipisci dolorem!</p>
                        <button>Go</button>
                    </div>
                    <div class="card">
                        <img class='card__img' src="./images/img2.jpeg" alt="card image"/>
                        <h3>Lorem ipsum dolor elit. </h3>
                        <p>Lorem ipsum dolor sit amet consectetur  dolore obcaecati ipsam quasi adipisci dolorem!</p>
                        <button>Go</button>
                    </div>
                    <div class="card">
                        <img class='card__img' src="./images/img2.jpeg" alt="card image"/>
                        <h3>Lorem ipsum dolor elit. </h3>
                        <p>Lorem ipsum dolor sit amet consectetur ratione in doloribus, dolorem!</p>
                        <button>Go</button>
                    </div>  */}
                    <Card headerText="Lorem ipsum dolor elit.">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima accusamus corporis omnis officia itaque ratione in doloribus, dolore obcaecati ipsam quasi adipisci dolorem!
                    </Card>
                    <Card headerText="Lorem ipsum dolor elit.">
                          Lorem ipsum dolor sit amet elit.
                    </Card>
                    <Card headerText="Lorem ipsum dolor elit.">
                          Lorem ipsum dolor sit amet. dolore obcaecati ipsam quasi adipisci dolorem!
                    </Card>
                    <Card headerText="Lorem ipsum dolor elit.">
                          Lorem ipsum dolor ipsam quasi adipisci dolorem!
                    </Card>
                    <Card headerText="Lorem ipsum dolor elit.">
                          Lorem ipsum dolor sit amet consectetur  dolore obcaecati ipsam quasi adipisci dolorem!
                    </Card>
                    <Card headerText="Lorem ipsum dolor elit.">
                          Lorem ipsum dolor sit amet consectetur ratione in doloribus, dolorem!
                    </Card>
                </section>
            </section>
            
            {/* <aside class="aside2"><p>Aside2</p></aside> */}
            <Aside classNum = '2'>2</Aside>
        </main>

        {/* <footer class="footer"><p>Footer</p></footer> */}
        <Footer>Footer</Footer>

     
    </div>
  );
}

export default App;
