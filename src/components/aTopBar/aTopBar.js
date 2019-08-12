import React,{Component} from 'react';
import about from './aTopBar.css'
import { Menu, Dropdown, Button, Icon, message } from 'antd';

const IconFont = Icon.createFromIconfontCN({
    scriptUrl:'//at.alicdn.com/t/font_1299721_j47v96432jc.js'
})

class ATopBar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const menu1 = (
            <Menu onClick={this.handleMenuClick}>
              <Menu.Item key="1" style={{lineHeight:'30px'}}>
                1st menu item
              </Menu.Item>
              <Menu.Divider></Menu.Divider>
              <Menu.Item key="2">
                2nd menu item
              </Menu.Item>
              <Menu.Item key="3">
                3rd item
              </Menu.Item>
            </Menu>
        );
        const menu2 = (
            <Menu onClick={this.handleMenuClick}>
              <Menu.Item key="1">
                <IconFont type="icon-buanquan"></IconFont>
                巴黎圣母院大火
              </Menu.Item>
              <Menu.Item key="2">
              <IconFont type="icon-buanquan"></IconFont>
                墨尔本枪击案
              </Menu.Item>
              <Menu.Item key="3">
                <IconFont type="icon-buanquan"></IconFont>
                波音修坏顺丰飞机
              </Menu.Item>
              <Menu.Item key="4">
                <IconFont type="icon-buanquan"></IconFont>
                索马里挟持人质
              </Menu.Item>
            </Menu>
        )
        return (
            <div className={about.top_bar}>
                <ul className={about.top_bar_left}>
                    <li style={{padding:'0 20px'}}><Icon type="home" />埃塞俄比亚坠机</li>
                    <li>
                        <div id="components-dropdown-demo-dropdown-button">
                            <Dropdown overlay={menu1} trigger={['click']}>
                            <Button>
                                全部账号 <Icon type="down" />
                            </Button>
                            </Dropdown>

                            <Dropdown overlay={menu1} trigger={['click']}>
                            <Button>
                                全部群组 <Icon type="down" />
                            </Button>
                            </Dropdown>
                        </div>
                    </li>
                </ul>
                <div className={about.top_bar_right}>
                    <div id="components-dropdown-demo-dropdown-button">
                        <Dropdown overlay={menu2} trigger={['click']}>
                        <Button className={about.moreButton}>
                            全部账号 <Icon type="down" />
                        </Button>
                        </Dropdown>
                        <button className={about.watchManageButton}>监测管理</button>
                    </div>
                </div>
            </div>
        );
    }
    handleButtonClick(e) {
        message.info('Click on left button.');
        console.log('click left button', e.target);
    }
      
    handleMenuClick(e) {
        message.info('Click on menu item.');
        console.log('click', e);
    }
}

export default ATopBar;