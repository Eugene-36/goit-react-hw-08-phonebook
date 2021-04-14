const getisAuthenticated = (state) => state.auth.token;
//console.log(this.props.state);
const getUserName = (state) => state.auth.user.name;
console.log(getUserName);
export default { getisAuthenticated, getUserName };
