console.log('from main');
// import * as ReactDOM from 'react-dom';

const populateHome = () => {
    /*ReactDOM.render(
        <Title title="Working"></Title>,
        document.querySelector('#title')
    );*/
  ReactDOM.render(
        <NavBar title="G-Link" links={['A', 'B', 'C', 'D']} inside={
            <Grid inside=
            {
            [
              <Cell inside={

                        <Grid inside={
                        [<div className="mdl-layout-spacer"></div>,
                          <h1>G-Link</h1>,
                          <div className="mdl-layout-spacer"></div>]
                        }>

                        </Grid>
                    } size={12}></Cell>,
              <Cell inside={
                        <Grid inside={
                        [
                          <div className="mdl-layout-spacer"></div>,
                          <h3 className="text-center">The place to link up with others to game with!</h3>,
                          <div className="mdl-layout-spacer"></div>,
                        ]
                        }></Grid>
                    } size={12}></Cell>,
              <Cell inside={
                        <Grid inside={
                        [
                          <div className="mdl-layout-spacer"></div>,
                          <Button text="Sign up!" href="/signup"></Button>,
                          <div className="mdl-layout-spacer"></div>,
                        ]
                        }></Grid>
                    } size={12}></Cell>,
              <Cell inside={
                        <Grid inside={
                        [
                          <div className="mdl-layout-spacer"></div>,
                          <a href="/login"><p>Login In</p></a>,
                          <div className="mdl-layout-spacer"></div>,
                        ]
                        }></Grid>
                    } size={12}></Cell>,
            ]
            }
            >

            </Grid>}>
        </NavBar>,
        document.querySelector('#nav'),
    );
};

$(document).ready(() => {
  populateHome();
});
