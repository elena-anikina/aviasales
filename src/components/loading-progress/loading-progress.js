import React from 'react';
import './loading-progress.css';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';

class LoadingProgress extends React.Component {
  componentDidUpdate(prevProps) {
    const { tickets, calcLoadingProgress, stop, finishLoadingProgress } = this.props;

    if (tickets !== prevProps.tickets || stop !== prevProps.stop) {
      calcLoadingProgress();
    }
    if (stop) {
      finishLoadingProgress();
    }
  }

  render() {
    const { loadingProgress, loadingProgressDelete } = this.props;

    const progressBar = (
      <div className="loadingProgress-bg">
        <div className="LoadingProgress-inner" style={{ width: `${loadingProgress}%` }} />
      </div>
    );

    return !loadingProgressDelete ? progressBar : null;
  }
}

const mapStateToProps = ({ ...data }) => ({ ...data });

export default connect(mapStateToProps, actions)(LoadingProgress);
