import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import S from './style';
import { Link } from 'react-router-dom';

const SearchBar = () => {
    return (
        <S.SearchWrapper>
            <Link to={'/'}>
                <FontAwesomeIcon icon={faSearch} className="search-icon" />
            </Link>
            <S.SearchInput type='text' />
        </S.SearchWrapper>
    );
};

export default SearchBar;