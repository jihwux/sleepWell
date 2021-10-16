import React from 'react';
import Link from 'next/link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

import styled from 'styled-components';
import Image from 'next/image';
import DrugAron from '../../../public/aron.jpeg';
import DrugCool from '../../../public/CoolDream.jpeg';

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
  display: flex;
  padding: 2rem 0;

  img {
    padding: 1rem;
  }
`;

const Supplement = () => {
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
                  <Avatar alt="A " src="https://s3.images-iherb.com/lex/lex17229/v/97.jpg" />
                </ListItemAvatar>
                <ListItemText
                  primary="Life Extension, L-트립토판, 500mg, 베지 캡슐 90정"
                  secondary={
                    <React.Fragment>
                      <Typography sx={{ display: 'inline' }} component="span" variant="body2">
                        Ali Connors
                      </Typography>
                    </React.Fragment>
                  }
                />
                {/* </a> */}
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src="https://s3.images-iherb.com/lex/lex17229/v/97.jpg" />
                </ListItemAvatar>
                <ListItemText
                  primary="B"
                  secondary={
                    <React.Fragment>
                      <Typography sx={{ display: 'inline' }} component="span" variant="body2" color="text.primary">
                        to Scott, Alex, Jennifer
                      </Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="C" src="https://s3.images-iherb.com/lex/lex17229/v/97.jpg" />
                </ListItemAvatar>
                <ListItemText
                  primary="Oui Oui"
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      ></Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>
            </List>
            {/* </IherbProduct> */}
            마그네슘, L-테아닌 , L-트립토판
          </dd>
          <dt>의약품</dt>
          <dd>
            수면유도제에는 아론정, 쿨드림 등 주변 약국에서 2~3천원에 구매 가능하며 단기적으로 복용하는게 권장 됩니다.
            <MedicineProduct>
              <Image src={DrugAron} alt="Appstore" width={500} height={250} />
              <Image src={DrugCool} alt="Appstore" width={500} height={250} />
            </MedicineProduct>
          </dd>
        </dl>
      </InfoContent>
    </GuidInfo>
  );
};

export default Supplement;
