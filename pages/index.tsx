import type { NextPage } from 'next';
import {useEffect, useState} from "react";
import configCat from "../src/utils/configCat";

interface UserType {
    id: number;
    name: string;
    email: string;
}

const Home: NextPage = () => {
    const [data, setData] = useState<UserType[]>();
    const [showEmail, setShowEmail] = useState<boolean>(false);

    configCat.getValueAsync("showEmail",  false)
        .then( value => { setShowEmail(value) });

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())
            .then((data) => {
                setData(data)
            })
    },[]);

    if (!data) {
        return <div>Loading...</div>
    }

  return (
      <div className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="lg:text-center">
                  <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Users</h2>
              </div>

              <div className="mt-10">
                  <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                      {data.map((item: UserType) => (
                          <div key={item.id} className="relative">
                              <dt>
                                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{item.name}</p>
                              </dt>
                              {showEmail && (
                                  <dd className="mt-2 ml-16 text-base text-gray-500">
                                      <strong>@</strong> {item.email}
                                  </dd>
                              )}
                          </div>
                      ))}
                  </dl>
              </div>
          </div>
      </div>
  )
}

export default Home
