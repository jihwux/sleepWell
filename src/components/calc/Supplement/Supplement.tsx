import React from 'react';
import Link from 'next/link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import styled from 'styled-components';
import Image from 'next/image';
import DrugAron from '../../../public/aron.jpeg';
import DrugCool from '../../../public/drug.png';
import Magnesium from '../../../public/magnesium.png';
import Theanine from '../../../public/theanine.png';
import Tryptophan from '../../../public/tryptophan.png';

const GuidInfo = styled.div`
  font-size: 16px;
  line-height: 1.8rem;
  padding-left: 3rem;

  @media only screen and (max-width: 768px) {
    padding-left: 0;
    p {
      padding: 0.5rem 0;
    }
  }
`;

const InfoContent = styled.div`
  padding-top: 3rem;
  dt {
    font-size: 1rem;
    font-weight: 600;
    padding: 1rem 0;
  }

  dd {
    font-size: 15px;
  }
`;

const IherbProduct = styled.div`
  width: 600px;
  height: 200px;
  border: 1px solid gray;
  display: flex;
`;

const MedicineProduct = styled.div`
  img {
    padding: 1rem;
  }
`;
const useStyles = makeStyles({
  root: {
    width: '100px',
    height: '100px',
    borderStyle: 'none',
  },
  text: {
    paddingTop: '1rem',
    fontSize: '14px',
  },
});

const Supplement = () => {
  const classes = useStyles();

  return (
    <GuidInfo>
      <p>
        불면증이 심하거나 시차적응 혹은 낮과밤이 바뀌어 정상적인 생활이 안될 경우에 삶의 질이 떨어집니다. 약물에 도움을
        받는다면 가까운 내과에 방문하여 처방을 받을 수 있는 수면제가 있으며, 단기적인 보조치료로 약국에서 쉽게 구매 할
        수 있는 수면유도제가 있습니다. 평소에는 수면에 도움이 되는 영양제를 복용하여 신체 리듬을 유지하는게 좋습니다.
      </p>
      <InfoContent>
        <dl>
          <dt>영양제</dt>
          <dd>
            {/* <IherbProduct> */}
            {/* <a href="">
                <Image src={DrugAron} alt="Appstore" width={100} height={100} />
              </a>W
              <a href="">마그네슘</a> */}
            <List sx={{ width: '100%' }}>
              <ListItem alignItems="flex-start">
                {/* <a href="https://mui.com/components/lists/#main-content"> */}
                <ListItemAvatar>
                  <Avatar alt="A " src={Magnesium} className={classes.root} />
                </ListItemAvatar>
                <ListItemText
                  primary="Doctor's Best, 100% 킬레이트화 고흡수 마그네슘, 100mg, 240정"
                  secondary={
                    <Typography className={classes.text}>
                      ​﻿트립토판은 신경전달물질인 세로토닌의 재료가 되는 아미노산입니다. 세로토닌이 부족하면 우울증과
                      불면증 같은 질환에 걸리기 쉽습니다. 부족하면 식욕이 증가해서 비만의 원인도 됩니다. ​ 테아닌과 함께
                      섭취하면 수면에 도움이 됩니다
                    </Typography>
                  }
                />
                {/* </a> */}
              </ListItem>
              {/* <Divider variant="inset" component="li" /> */}
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src={Theanine} className={classes.root} />
                </ListItemAvatar>
                <ListItemText
                  primary="L-테아닌, 알파 웨이브, 긴장 완화, 진정 작용 집중 효과, 100 mg"
                  secondary={<Typography className={classes.text}>Ali Connors</Typography>}
                />
              </ListItem>
              {/* <Divider variant="inset" component="li" /> */}
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="C" src={Tryptophan} className={classes.root} />
                </ListItemAvatar>
                <ListItemText
                  primary="Now Foods, L-트립토판, 두 배 강도, 1,000mg, 60정"
                  secondary={<Typography className={classes.text}>Ali Connors</Typography>}
                />
              </ListItem>
            </List>
            {/* </IherbProduct> */}
          </dd>
          <dt>의약품</dt>
          <dd>
            아래는 일반의약품인 수면유도제입니다. 아론정, 쿨드림 등 주변 약국에서 2~4천원에 구매 가능하며 단기적으로
            복용하는게 권장 됩니다. 전문의약품인 수면제로는 라제팜, 졸피뎀 등 수면제가 있으며 가까운 병원에 내원하여서
            상담 후 처방을 받을 수 있습니다.
            <MedicineProduct>
              {/* <Image src={DrugAron} alt="Appstore" width={500} height={250} /> */}
              <Image src={DrugCool} alt="Appstore" width={700} height={320} />
            </MedicineProduct>
          </dd>
        </dl>
      </InfoContent>
    </GuidInfo>
  );
};

export default Supplement;
