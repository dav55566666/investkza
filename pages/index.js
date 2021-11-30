import React from 'react';

import AdvantagesHome from '../components/advantages';
import AdvantagesItem from '../components/advantages/item';
import CarouselHome from '../components/carousel-home';
import DescriptionHome from '../components/descreption';
import ExperiansHome from '../components/experians';
import Footer from '../components/footer';
import HeaderHome from '../components/header';
import HowStartHome from '../components/how-start';
import NavMenu from '../uikit/nav';
import SubNav from '../uikit/nav/sub-menu';

export default function Home() {
    return (
        <div className="home">
            <NavMenu />
            <SubNav />
            <HeaderHome />
            <CarouselHome />
            <AdvantagesHome title={'Преимущества платформы'} isOnBorder={true}>
                <AdvantagesItem
                    number={'01'}
                    imgPath={'/img/advantages/fast.png'}
                    title={'Быстро и онлайн'}
                    desc={
                        'Вам не нужно приезжать в офис, зарегистрируйтесь на платформе и начните инвестировать сразу, это займет 5 минут '
                    }
                />
                <AdvantagesItem
                    number={'02'}
                    imgPath={'/img/advantages/full.png'}
                    title={'Полностью регулируется'}
                    desc={'Работаем в зоне регулирования МФЦА'}
                />
                <AdvantagesItem
                    number={'03'}
                    imgPath={'/img/advantages/secure.png'}
                    title={'Безопасность активов'}
                    desc={
                        'Токены, эмитируемые и размещаемые на digital-investor.kz , обращаются только на платформе и могут быть размещены у наших партнеров.'
                    }
                />
            </AdvantagesHome>
            <AdvantagesHome title={'Преимущества токенов'} isOnBorder={true}>
                <AdvantagesItem
                    number={'01'}
                    imgPath={'/img/advantages/token-1.png'}
                    title={'Выгодные инвестиции'}
                    desc={
                        'Доходность выше, чем по традиционным финансовым инструментам. Гарантия имущественных прав. Все расчеты в валюте согласно Статье 5 правил МФЦА.'
                    }
                />
                <AdvantagesItem
                    number={'02'}
                    imgPath={'/img/advantages/token-2.png'}
                    title={'Высокая надежность'}
                    desc={'Компании, размещенные на платформе, проходят проверку на финансовую устойчивость.'}
                />
                <AdvantagesItem
                    number={'03'}
                    imgPath={'/img/advantages/token-3.png'}
                    title={'Юридическая сила'}
                    desc={
                        'Компании, разместившие токены, отвечают по своим обязательствам перед инвесторами. У владельца токенов есть юридические права на выплату процентов.'
                    }
                />
            </AdvantagesHome>
            <AdvantagesHome title={'Преимущества МФЦА'} isOnBorder={false}>
                <AdvantagesItem
                    number={'01'}
                    imgPath={'/img/advantages/mfca-1.png'}
                    title={'Быстро и онлайн'}
                    desc={'Судебные споры ведутся в суде МФЦА по законам Англии и Уэльса.'}
                />
                <AdvantagesItem
                    number={'02'}
                    imgPath={'/img/advantages/mfca-2.png'}
                    title={'Полностью регулируется'}
                    desc={
                        'МФЦА предлагает отличную платформу для международных инвестиционных компаний, с которой мы уже знакомы, включая английское право и налоговые льготы.'
                    }
                />
                <AdvantagesItem
                    number={'03'}
                    imgPath={'/img/advantages/mfca-3.png'}
                    title={'Безопасность активов'}
                    desc={
                        'Участники МФЦА осуществляют свою деятельность в таких сферах, как банковское дело, страхование, фондовый рынок, управление активами, частный банкинг.'
                    }
                />
            </AdvantagesHome>
            <ExperiansHome />
            <DescriptionHome />
            <HowStartHome />
            <Footer />
        </div>
    );
}
