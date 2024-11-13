import { useEffect, useState } from 'react'
import Link from 'next/link'
import { gql, useQuery } from '@apollo/client'
import DashboardLayout from '@/components/layout/dashboard-layout'
import BookList from '@/components/book-list'

const COLLECTION = ['FASHION', 'ART', 'FICTION', 'NON-FICTION', 'SYFY', 'BIOGRAPHY'],

const GET_BOOKS_COLLECTIONS = gql`
  query bookCollections(where: {collection: Collection!}) {
    books(where: {collection: $collection}) {
      bookId
      title
      author
      date
      tag
      collection
      cover
    }
  }
`
export default function Read () {
 const [bookCollections, setBookCollections] = useState([])

 const {data} = useQuery(GET_BOOKS_COLLECTIONS, {variables: {collection: {COLLECTION}}})

 useEffect(() => {
  setBookCollections(data?.bookCollections)
 }, [data])

 return (
  <div className="flex flex-row flex-wrap justify-center -mx-3">
   <BookList data={bookCollections} collectionType={COLLECTION} />
  </div>
 )
}

Read.getLayout = function getLayout (page) {
 return (
  <DashboardLayout>
   {page}
  </DashboardLayout>
 )
}
