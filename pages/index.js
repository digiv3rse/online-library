export default function Home () {
 return (
  <></>
 )
}

export async function getStaticProps () {
 if (process.env.npm_lifecycle_event === 'build') {
  return {notFound: true}
 }
 return {
  redirect: {
   destination: '/{collection}',
   permanent: true,
  },
 }
}
