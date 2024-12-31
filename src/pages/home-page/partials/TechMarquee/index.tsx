import { assets } from "../../../../assets/assets"
import './TechMarquee.css'
const TechMarquee = () => {
    return (
        <>
            <div className="home__tech">
                <div className="container-tdn2">
                    <div className="inner-tech">
                        <div className="desc">Technology used</div>
                        <div className="wrap-tdn fade-out">
                            <div className="tech__main">
                                <div className="tech__item">
                                    <div className="item__icon">
                                        <img src={assets.react}
                                            alt="react" />
                                    </div>
                                    <div className="item__content">React</div>
                                </div>
                                <div className="tech__item">
                                    <div className="item__icon">
                                        <img src={assets.spring_boot}
                                            alt="spring" />
                                    </div>
                                    <div className="content">Spring Boot</div>
                                </div>
                                <div className="tech__item">
                                    <div className="item__icon">
                                        <img src={assets.mysql}
                                            alt="mysql" />
                                    </div>
                                    <div className="content">My SQL</div>
                                </div>
                                <div className="tech__item">
                                    <div className="item__icon">
                                        <img src={assets.docker}
                                            alt="firebase" />
                                    </div>
                                    <div className="content">Docker</div>
                                </div>
                                <div className="tech__item">
                                    <div className="item__icon">
                                        <img src={assets.rest_api}
                                            alt="rest" />
                                    </div>
                                    <div className="content">Rest:API</div>
                                </div>
                                <div className="tech__item">
                                    <div className="item__icon">
                                        <img src={assets.java}
                                            alt="java" />
                                    </div>
                                    <div className="content">Java</div>
                                </div>
                                <div className="tech__item">
                                    <div className="item__icon">
                                        <img src={assets.typescript}
                                            alt="typescript" />
                                    </div>
                                    <div className="content">TypeScript</div>
                                </div>
                            </div>
                            <div className="tech__main">
                                <div className="tech__item">
                                    <div className="item__icon">
                                        <img src={assets.react}
                                            alt="react" />
                                    </div>
                                    <div className="item__content">React</div>
                                </div>
                                <div className="tech__item">
                                    <div className="item__icon">
                                        <img src={assets.spring_boot}
                                            alt="spring" />
                                    </div>
                                    <div className="content">Spring Boot</div>
                                </div>
                                <div className="tech__item">
                                    <div className="item__icon">
                                        <img src={assets.mysql}
                                            alt="mysql" />
                                    </div>
                                    <div className="content">My SQL</div>
                                </div>
                                <div className="tech__item">
                                    <div className="item__icon">
                                        <img src={assets.tailwind}
                                            alt="firebase" />
                                    </div>
                                    <div className="content">TailwindCSS</div>
                                </div>
                                <div className="tech__item">
                                    <div className="item__icon">
                                        <img src={assets.rest_api}
                                            alt="rest" />
                                    </div>
                                    <div className="content">Rest:API</div>
                                </div>
                                <div className="tech__item">
                                    <div className="item__icon">
                                        <img src={assets.java}
                                            alt="java" />
                                    </div>
                                    <div className="content">Java</div>
                                </div>
                                <div className="tech__item">
                                    <div className="item__icon">
                                        <img src={assets.typescript}
                                            alt="typescript" />
                                    </div>
                                    <div className="content">TypeScript</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TechMarquee