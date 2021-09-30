
import React, { useCallback, useEffect, useState } from 'react'
import ConferenceFilters from '../ConferenceFilters'
//import conferences from 'utils/mocks/attendeeList'
import ConferencesList from './ConferenceList'
import LoadingFakeText from '@bit/totalsoft_oss.react-mui.fake-text'
import { extractPager, generateDefaultFilters } from 'utils/functions'
import { useQueryWithErrorHandling } from 'hooks/errorHandling'
import { CONFERENCE_LIST_QUERY } from '../gql/queries/ConferenceListQuery'
import { useEmail } from 'hooks/useEmail'
import Pagination from '@bit/totalsoft_oss.react-mui.pagination'
import { useFooter } from 'providers/AreasProvider'



function ConferenceListContainer (){
    const [filters,setFilters] = useState(generateDefaultFilters)
    const [pager, setPager] =useState({totalCount:25,page:0,pageSize:3})
    
    const[email] = useEmail()
    const [, setFooter] = useFooter()
    useEffect(() => () => setFooter(null), [setFooter])

    const {data, loading, refetch} = useQueryWithErrorHandling(CONFERENCE_LIST_QUERY, {
        variables: {pager: extractPager(pager), filters, email}
    })

    const handleRowsPerPageChange = useCallback((pageSize) => {
        setPager((state) => ({...state, pageSize: parseInt(pageSize)}))
    }, [])

    const handlePageChange = useCallback((page) =>
    setPager(state => ({ ...state, page }))
    , [])

    

    useEffect(() => {
        setFooter(<Pagination 
        totalCount={pager.totalCount}
        page={pager.page}
        pageSize={pager.pageSize}
        rowsPerPageOptions={[3,6,12,24,100]}
        onRowsPerPageChange={handleRowsPerPageChange}
        onPageChange={handlePageChange}
        onRefresh={refetch}
        />)
    }, [handlePageChange, handleRowsPerPageChange, pager, setFooter, refetch])


    const handleFilter = useCallback((value) => {setFilters(value)}, [])
    

    if (loading || !data) {
        return <LoadingFakeText lines={10} />
    }

    return(
    <> 
    <ConferenceFilters filters = {filters} onApplyFilters={handleFilter}/>
    <ConferencesList conferences={data?.conferenceList?.values}/>
    </>
    )
}

export default ConferenceListContainer