import { makeStyles } from '@material-ui/styles';
import { INFO_HEADER_BG_COLOR, INFO_HEADER_HEIGHT } from '../../constants';

export const useInfoHeaderStyles = makeStyles(theme => ({
    customAppBar: {
        height: INFO_HEADER_HEIGHT,
        backgroundColor: INFO_HEADER_BG_COLOR,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
    },
}));
