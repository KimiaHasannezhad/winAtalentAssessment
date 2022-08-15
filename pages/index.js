import Dropdown from '../components/Dropdown'

export default function Home(props) {
  const { data } = props
  return (
    <div className="container">
      <div className="d-flex flex-dir-row">
        <Dropdown title="Crypto" data={data} allowMultiSelect />
        <Dropdown title="Location" data={data} allowMultiSelect={false} />
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const listedData = await fetch(`https://api.coinpaprika.com/v1/coins`)
  const data = await listedData.json()
  return {
    props: { data },
  }
}
