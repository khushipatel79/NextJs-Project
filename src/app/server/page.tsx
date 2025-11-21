import axios from "axios"

const Serverpage = async () => {
  const result = await axios.get("http://localhost:3001/contacts")
  const data = result.data;
  return (
    <>
      <div className="flex flex-col items-center gap-3">
        <div>
          <h1>SERVER SIDE</h1>
        </div>
        <div className="flex flex-col bg-white rounded p-4">
          {data.length >= 1 ? (
            data.map((item, index) => (
              <div key={index}>
                <h2>{item.name} : {item.email}</h2>
              </div>
            ))
          ) : (
            <div>
              <h1>no data</h1>
            </div>
          )}
        </div>

      </div>
    </>
  )
}

export default Serverpage
