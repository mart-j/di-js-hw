import React, { FC, useState } from 'react';
import NanStabilityAnalysis from '../nanStabilityAnalysis/NanStabilityAnalysis';
import StabilityAnalysis from '../stabilityAnalysis/StabilityAnalysis';
import { ChartData } from '../../types';
import styles from './ValueDistribution.module.scss';

interface Props {
  selectedPosition: ChartData;
  closeChartHandler: () => void;
}

const ValueDistribution: FC<Props> = ({ selectedPosition, closeChartHandler }) => {
  const [toogle, setToogle] = useState(false);

  const switchButtonText = () => {
    if (!toogle) {
      return 'Switch to Nan Stability Analysis';
    }
    return 'Switch to Stability Analysis';
  };


  return (
        <div className={styles.chartWrapper}>
            <div className={styles.buttonWrapper}>
                <div></div>
                <div>
                    <button onClick={()=> setToogle(!toogle)} className={styles.switchButton}>{switchButtonText()}</button>
                </div>
                <div>
                    <button onClick={closeChartHandler} className={styles.closeButton}>X</button>
                </div>

            </div>
            {      toogle ?
                    <NanStabilityAnalysis selectedPosition={selectedPosition} /> :
                    <StabilityAnalysis selectedPosition={selectedPosition} />
            }

        </div>
  );
};
export default ValueDistribution;
