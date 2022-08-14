import Dropdown from '../components/Dropdown'

export default function Home(props) {
  const { data } = props
  return (
    <div className="d-flex flex-dir-row justify-center">
      <Dropdown title="cryptocurrency" data={data} allowMultiSelect />
      <Dropdown title="locations" data={data} allowMultiSelect={false} />
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
