import React from 'react';
import Tag from './style';

const BasicTag = ({ children, tag }) => {

    return (
        <Tag tag={tag}>
            {children}
        </Tag>
    );
};

export default BasicTag;
