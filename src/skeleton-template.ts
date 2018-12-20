'use strict';

/**
 * 生成新组件内容
 * @param skeleton_component_name 组件名称
 * @param skeleton_styled_components 组件样式名称
 */
export function generateComponentTemplate(skeleton_component_name: string, skeleton_styled_components: string){
    return `import React, {PureComponent, Fragment} from 'react';
import {connect} from 'react-redux';
import {} from './${skeleton_styled_components}';

class ${skeleton_component_name} extends PureComponent{

    render(){

        return (
            <Fragment></Fragment>
        );
    }
}


const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps,mapDispatchToProps)(${skeleton_component_name});`;
}

/**
 * 生成store内interface文件内容
 */
export function generateInterfaceTemplate(){
    return `import * as actionCreators from './actionCreators';
import * as actionTypes from './actionTypes';
import reducer from './reducer';
export {actionCreators, actionTypes, reducer};`;
}

/**
 * 生成store内reducer文件内容
 */
export function generateReducerTemplate(){
    return `import {fromJS} from 'immutable';
import {actionTypes} from './interface';

const defaultState = fromJS({

});

export default (state = defaultState, action) => {
    switch (action.type) {

    default:
        return state;
    }
};`;
}

/**
 * 生成styled-components文件内容
 */
export function generateStyleTemplate(){
    return `import styled from 'styled-components';
`;
}