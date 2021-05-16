/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Dropdown, Icon } from "rsuite";
import logo from "../../images/transparent_white.png";
import "./ScriptNavbar.scss";

const ScriptNavbar = () => {
    return (
        <div className="script-editor-header-bar">
            <div className="script-editor-header-left-section">
                <div>
                    <img className="script-wiz-logo" src={logo} />
                </div>
                <a
                    href="https://github.com/bit-matrix/script-wiz-lib"
                    target="_blank"
                    className="script-editor-header-icon-item"
                    rel="noreferrer"
                >
                    <Icon icon="github" />
                    <span className="script-editor-header-icon-item-text hidden-mobile">
                        Github
                    </span>
                </a>
                <a
                    href="https://www.npmjs.com/package/@script-wiz/lib"
                    target="_blank"
                    className="script-editor-header-icon-item"
                    rel="noreferrer"
                >
                    <Icon icon="project" />
                    <span className="script-editor-header-icon-item-text  hidden-mobile">
                        Npm
                    </span>
                </a>
                <a
                    href="https://twitter.com/script_wizard"
                    target="_blank"
                    className="script-editor-header-icon-item"
                    rel="noreferrer"
                >
                    <Icon icon="twitter" />
                    <span className="script-editor-header-icon-item-text  hidden-mobile">
                        Twitter
                    </span>
                </a>
                <a className="script-editor-header-icon-item">
                    <Icon icon="medium" />
                    <span className="script-editor-header-icon-item-text  hidden-mobile">
                        Medium
                    </span>
                </a>
                <a
                    href="https://t.me/scriptwizard"
                    target="_blank"
                    className="script-editor-header-icon-item"
                    rel="noreferrer"
                >
                    <Icon icon="telegram" />
                    <span className="script-editor-header-icon-item-text hidden-mobile">
                        Telegram
                    </span>
                </a>
            </div>
            <div className="script-editor-header-right-section">
                <Dropdown
                    className="script-editor-header-right-section-dropdown"
                    title={
                        <div className="dropdown-item">
                            <span>Liquid Network</span>
                        </div>
                    }
                    activeKey="a"
                >
                    <Dropdown.Item disabled eventKey="a">
                        {
                            <div className="dropdown-item">
                                <span>Bitcoin Network</span>
                            </div>
                        }
                    </Dropdown.Item>
                </Dropdown>
            </div>
        </div>
    );
};

export default ScriptNavbar;
