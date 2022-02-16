import React from "react";
import useFetch from "react-fetch-hook";
import Loading from "./Loading";
function Data() {
  const { isLoading, data } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );
  console.log(data);
  return (
    <div>
      {isLoading && <Loading />}
      {data && (
        <div>
          {data.map((data) => (
            <div key={data.name}>
              <ol>
                <li>Name : {data.name}</li>
                <li>street : {data.address.street}</li>
                <li>suite : {data.address.suite}</li>
                <li>city : {data.address.city}</li>
              </ol>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Data;
