let user = 'Employee';

switch (user) {
    case 'Employee':
        console.log ('You are authorized to have access to "Dietary Services"!');
        break;
    case 'Enrolled member':
        console.log('You are authorized to have access to "Dietary Services" and one-on-one interaction with a dietician!');
        break;
    case 'Subscriber':
        console.log('You are authorized to have partial access to facilitate "Dietary Services" only.');
        break;
    case 'Non-Subscriber':
        console.log ("Please enroll or at least subscribe first to avail this facility.");
        break;
    default:
        console.log ("Please, register first!");
        break;
}
