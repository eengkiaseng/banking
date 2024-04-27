import React from 'react'
import TopNavbar from '../../components/navbar/topnavbar/TopNavbar'
import MainMenu from '../../components/navbar/mainmenu/MainMenu'
import FooterWidget from '../../components/footer/footerwidget/FooterWidget'

function MainLayout({children}) {
  return (
    <div className="web-app">
        <TopNavbar></TopNavbar>
        <MainMenu></MainMenu>
        <div className="content">{children}</div>
        <FooterWidget></FooterWidget>
    </div>
  )
}

export default MainLayout