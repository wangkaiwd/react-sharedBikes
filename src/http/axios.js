import React, { Component } from 'react'
import JsonP from 'jsonp'
class Axios extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  static jsonp = (url, options) => {
    return new Promise((resolve, reject) => {
      JsonP(url, options, (err, data) => {
        if (err) return reject(err)
        return resolve(data)
      })
    })
  }

  render() {
    return (
      <div>
        Axios
     </div>
    )
  }
}
export default Axios
