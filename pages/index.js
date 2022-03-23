import withAuth from "./HOC/withAuth"

function Home() {
  return (
    <div>
       Dashboard
    </div>
  )
}

export default withAuth(Home)