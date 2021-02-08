class IssueList extends React.Component {
    render() {
        return(
        <React.Fragment>
            <h1>Issue Tracker</h1>
            <IssueFilter/>
            <hr/>
            <IssueTable/>
            <hr/>
            <IssueAdd/>
        </React.Fragment>
        )
    }
}

class IssueFilter extends React.Component {
    render() {
        return (
            <div>This is a placeholder for the issue filter</div>
        )
    }
}

class IssueTable extends React.Component {
    render() {
        return (
            <div>This is a placeholder for the issue table</div>
        )
    }
}

class IssueAdd extends React.Component {
    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                    </tr>
                </thead>
                <tbody>
                    <IssueRow/>
                    <IssueRow/>
                </tbody>
            </table>
        )
    }
}

class IssueRow extends React.Component {
    render() {
        const style = this.props.rowStyle;
        return (
            <tr>
                <td>{this.props.issue_id}</td>
            </tr>
        )
    }
}



const element = <IssueList/>
ReactDOM.render(element, document.getElementById('contents'));