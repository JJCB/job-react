import * as React from 'react';
import { useRef } from 'react';
import { connect } from 'react-redux';

import { Wrapper, Label, Input, Title, Span, Content, List, Item, WrapperInput, } from './styled';
import { setFilterListJobs } from 'View/Home/State/action';
import * as selectors from "View/Home/Component/Search/State/selectors";
import { fetchListLocations, hiddenListLocations } from './State/action';

export const SearchComponent = ({
    setFilterListJobs,
    fetchListLocations,
    listLocations,
    showList,
    hiddenListLocations }) => {
    const inputRef: any = useRef(null);
    const onChangeInput = (e) => {
        const value = e.target.value
        if (value.length >= 3) {
            fetchListLocations(value)
        } else {
            hiddenListLocations()
        }
        if (value === '') {
            setFilterListJobs({
                type: '',
                slug: ''
            })
        }
    }
    const handleFilter = (item) => {
        inputRef.current.value = item.name
        inputRef.current.focus()
        hiddenListLocations()
        setFilterListJobs({
            type: item.type,
            slug: item.slug
        })
    }
    return (
        <Wrapper>
            <Content>
                <Title>
                    Work with <Span>GraphQL</Span>  in a modern startup.
            </Title>
                <Label>
                    <WrapperInput>
                        <Input ref={inputRef} placeholder='Location' onChange={(e) => {
                            onChangeInput(e)
                        }} />
                        {
                            (listLocations.length > 0 && showList) && (
                                <List>
                                    {
                                        listLocations.map((item) => (
                                            <Item key={item.id} onClick={() => {
                                                handleFilter(item)
                                            }} >{item.name}</Item>
                                        ))
                                    }
                                </List>
                            )
                        }

                    </WrapperInput>
                </Label>
            </Content>
        </Wrapper>
    )
}
const mapDispatchToProps = (dispatch: any) => ({
    fetchListLocations: (val) => dispatch(fetchListLocations(val)),
    setFilterListJobs: (filter) => dispatch(setFilterListJobs(filter)),
    hiddenListLocations: () => dispatch(hiddenListLocations()),
});

const mapStateToProps = (state: any) => ({
    listLocations: selectors.getListLocations(state),
    showList: selectors.showList(state),
});

export const Search = connect(mapStateToProps, mapDispatchToProps)(SearchComponent);
