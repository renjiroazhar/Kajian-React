import React, { Component } from 'react';
import { Button } from 'reactstrap';
import {
    Card,
} from 'reactstrap';
import './style.css';

class App extends Component {
    //menampung variabel
    state = {
        database: [],
        data: '',
        tombol: false,
        id: 0
    };

    handleChange = e => {
        this.setState({
            data: e.target.value
        });
        console.log(this.state.data);
    };

    //Mendapatkan Data di Local Storage
    getDatabase = () => {
        const getTodo = JSON.parse(localStorage.getItem('todo'));
        if (getTodo != null) {
            return this.setState({
                database: getTodo
            });
        } else {
        }
    };

    //Menambah Data ke Local Storage
    addData = () => {
        const database = this.state.database;
        const data = this.state.data;
        database.push(data);
        localStorage.setItem('todo', JSON.stringify(database));

        this.setState({
            data: ''
        });
    };

    //Menghapus Data
    deleteData = id => {
        const database = this.state.database;
        database.splice(id, 1);
        localStorage.setItem('todo', JSON.stringify(database));
        this.getDatabase();
    };

    //Mendapatkan Data
    getEdit = index => {
        const database = this.state.database;
        const getData = database[index];
        this.setState({
            data: getData,
            tombol: true,
            id: index
        });
    };

    //Mengedit Data
    edit = id => {
        const database = this.state.database;
        const data = this.state.data;
        database.splice(id, 1, data);
        localStorage.setItem('todo', JSON.stringify(database));
        this.setState({
            data: '',
            tombol: false
        });
        this.getDatabase();
    };

    componentDidMount() {
        this.getDatabase();
    }

    render() {
        return (
            <div>
                <Card className="card-style">
                    <input value={this.state.data} onChange={this.handleChange} />
                    {this.state.tombol ? (
                        <div>
                            <Button onClick={() => this.edit(this.state.id)}>Simpan</Button>
                            <Button
                                color="danger"
                                onClick={() =>
                                    this.setState({
                                        tombol: false
                                    })
                                }>
                                Batal
              </Button>
                        </div>
                    ) : (
                            <Button color="success" onClick={() => this.addData()}>
                                Tambah
            </Button>
                        )}

                    <ul>
                        {this.state.database.map((datum, id) => {
                            return (
                                <div>
                                    <li style={{ color: 'white' }} key={id}>
                                        {datum}
                                    </li>
                                    <Button color="danger" onClick={() => this.deleteData(id)}>
                                        Hapus
                                    </Button>
                                    <Button onClick={() => this.getEdit(id)}>Edit</Button>
                                </div>
                            );
                        })}
                    </ul>
                </Card>
            </div>
        );
    }
}
export default App;