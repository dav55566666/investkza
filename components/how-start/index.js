import React, { Component, useState } from "react";
import { Carousel } from "antd";
import 'antd/dist/antd.css';
export default class CarouselComponent extends Component {
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.carousel = React.createRef();
        this.state = { div: "" }
        this.popUpFunc = this.popUpFunc.bind(this)
        this.popUpNoned = this.popUpNoned.bind(this)
    }
    next() {
        this.carousel.next();
    }
    previous() {
        this.carousel.prev();
    }
    popUpNoned(e) {
        if (e.target.src === undefined) {
            this.setState({
                div: ""
            })
        }
    }
    popUpFunc(imgSrc, arg) {
        if (arg == "display-block") {
            this.setState({
                div: <div onClick={this.popUpNoned} className="popUpDiv" style={{ width: '100%', height: '100vh', position: 'absolute', zIndex: "9999", background: "rgba(194, 193, 193, 0.562)", display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center" }} >
                    <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
                        <div></div>
                        <div onClick={this.popUpFunc}>
                            <img src="/img/blue-number.png" alt="" />
                            <p style={{ position: 'absolute', fontSize: "23px", marginTop: "-50px", marginLeft: "10px", cursor: "pointer" }}>X</p>
                        </div>
                    </div>
                    <div><img style={{ width: "800px" }} src={`${imgSrc}`} alt="" /></div>
                    <div></div>
                </div>
            })
        } else {
            this.setState({
                div: ""
            })
        }


    }
    render() {
        const props = {
            dots: true,
            infinite: true,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <div className="how-home">
                {
                    this.state.div
                }
                <div className="container">
                    <div className="how-home_content">
                        <div className="how-home_content-header">
                            <h2>?????? ?????????????</h2>

                            <div className="actions-how">
                                <div onClick={this.previous} className="actions-how_item">
                                    <img src='/img/acsascas.png' />
                                </div>
                                <div onClick={this.next} className="actions-how_item" style={{ background: '#49B193' }}>
                                    <img src='/img/ascaascasqw.png' />
                                </div>
                            </div>
                        </div>
                        <Carousel autoplay loop ref={node => (this.carousel = node)} {...props} >
                            <div className="how-home_content-slides">
                                <div onClick={() => this.popUpFunc("/img/Capture.png", "display-block")} className="how-home_content-slides_slide">
                                    <div className="blue-number">
                                        <img src="/img/blue-number.png" alt="" />
                                        <p>01</p>
                                    </div>

                                    <h6>??????????????????????</h6>
                                    <p>
                                        ?????????????????????????????? ???????????? ?????????????? ???? ??????????????????, ?? ?????????????? ?????????? ???????????? ?????? ?????????????????????? ??????????????
                                    </p>

                                    <img src="/img/Capture.png" alt="" />
                                </div>

                                <div onClick={() => this.popUpFunc("/img/Captascure.png", "display-block")} className="how-home_content-slides_slide">
                                    <div className="blue-number">
                                        <img src="/img/blue-number.png" alt="" />
                                        <p>02</p>
                                    </div>
                                    <h6>????????????????????</h6>
                                    <p>
                                        ?????????????????? ?????? ?????????????????????? ?????????????? ?? ?????????????? ???????????????????? ???????????????? ?????? ?????????? ?????????????????? ??????????
                                    </p>

                                    <img src="/img/Captascure.png" alt="" />
                                </div>

                            </div>
                            <div className="how-home_content-slides">

                                <div onClick={() => this.popUpFunc("/img/Capasdture.png", "display-block")} className="how-home_content-slides_slide">
                                    <div className="blue-number">
                                        <img src="/img/blue-number.png" alt="" />
                                        <p>03</p>
                                    </div>

                                    <h6>????????????????????</h6>
                                    <p>
                                        ???????????????? ?? ???????????? ???????????? ????????????????
                                    </p>

                                    <img src="/img/Capasdture.png" alt="" />
                                </div>

                                <div onClick={() => this.popUpFunc("/img/Captur5455e.png", "display-block")} className="how-home_content-slides_slide">
                                    <div className="blue-number">
                                        <img src="/img/blue-number.png" alt="" />
                                        <p>04</p>
                                    </div>
                                    <h6>??????????</h6>
                                    <p>
                                        ?????????????????? ?????????? ???? ?????????????????????????? ???????????? ????????????????
                                    </p>

                                    <img src="/img/Captur5455e.png" alt="" />
                                </div>

                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        );
    }
}
