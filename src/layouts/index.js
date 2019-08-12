import React, { Component } from 'react';
import styles from './index.css';
import Icon from 'antd/es/icon';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import SecondRouter from '../components/secondRouter/index'
import {setLocale,getLocale ,FormattedMessage} from 'umi-plugin-locale'


class BasicLayout extends Component{
  constructor(props) {
    super(props);
    this.state = {
      languageFlag:false,
      languageText:'',
      router: [],
      styleFlag: true,
      flag: false,
      routerActive:0,
      offsetTop: "",
      offsetLeft:"",
      routerChildren: []
    };
  }
  render() {
    const { styleFlag, flag, offsetTop,offsetLeft, routerChildren,routerActive } = this.state
    return (
      <div className={styles.wrap}>
        <header className={styles.header}>
          <div className={styles.title}>
            {styleFlag && <h2>突发预警系统</h2>}
            <Icon type="unordered-list" onClick={() => { this.styleChange() }} />
          </div>
          <div className={styles.search}>
            <div className={styles.inpt}>
              <input type="text" placeholder="搜索"/>
              <Icon type="search"/>
            </div>
            
            <Icon type="bell" className={styles.bell}/>
            <div className={styles.user}>
              <span></span>
              <p>Nick</p>
            </div>
            <div className={styles.ce} onClick={()=>this.changeLanFlag()}>{window.localStorage.getItem('language')?window.localStorage.getItem('language'):'Language'}
              <ul className={`${styles.languages}  ${this.state.languageFlag?styles.showView:null}`}>
                <li onClick={()=>this.changeToCn()}>中文</li>
                <li onClick={()=>this.changeToEn()}>英文</li>
              </ul>
            </div>
            <Icon type="menu" className={styles.menu}/>
          </div>
        </header>
        <main className={styles.main}>
          <div className={`${styles.left_title} ${styleFlag?null:styles.stylechange}`}>
            <ul>
              {
                this.state.router.map((item,index) => {
                  return item.path ? <NavLink to={item.path ? item.path : "#"} key={item.id}>
                    <li data-id={item.id} onClick={()=>{this.routerActive(index)}} className={routerActive===index?styles.active:""} onMouseEnter={(e) => { this.mouseenter(e)}}><Icon type={item.icon} />{styleFlag && <span><FormattedMessage id={item.lanId} /></span>}</li>
                  </NavLink> : <li key={item.id} className={routerActive===index?styles.active:""} data-id={item.id} onMouseEnter={(e) => { this.mouseenter(e) }}><Icon type={item.icon} />{styleFlag && <span><FormattedMessage id={item.lanId} /></span>}</li>
                })
              }
              {
                flag && <SecondRouter routerChildren={routerChildren} offsetTop={offsetTop} offsetLeft={offsetLeft} flagChange={() => this.flagChange()} />
              }
            </ul>

          </div>
          <div className={styles.right_content}>
            {this.props.children}
          </div>
        </main>
      </div>
    );
  }
  componentDidMount() {
    axios.get('http://169.254.213.146:7001/getRouter').then(con => {
      this.setState({
        router: con.data.data.body.routes
      })
    })
  }
  routerActive(index){
    this.setState({
      routerActive:index
    })
  }
  styleChange() {
    this.setState({
      styleFlag: !this.state.styleFlag
    })
   
    console.log(getLocale())

  }
  mouseenter(e) {
    this.setState({
      flag: true,
      offsetTop: e.target.offsetTop,
      offsetLeft:e.target.clientWidth
    })
    const eid = Number(e.target.getAttribute('data-id'))
    let id = eid ? eid : 1
    const routerChild = this.state.router.filter(item => item.id === id)
    if (routerChild && routerChild[0].children) {
      this.setState({
        routerChildren: routerChild[0].children
      });
    } else {
      this.setState({
        routerChildren: []
      });
    }
  }
  flagChange() {
    const _this = this;
    _this.setState({
      flag: false
    });
  }
  changeToCn(){
    window.localStorage.setItem('language','中文')
    setLocale('zh-CN');
  }
  changeToEn(){
    window.localStorage.setItem('language','英文')
    setLocale('en-US');
  }
  changeLanFlag(){
    this.setState({
      languageFlag:!this.state.languageFlag
    })
    console.log(this.state.languageFlag)
  }
}

export default BasicLayout;
