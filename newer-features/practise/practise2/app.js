const data = [
  {
    name: 'John Doe',
    age: '42',
    gender: 'male',
    lookingfor: 'female',
    location: 'Boston MA',
    image: 'https://randomuser.me/api/portraits/men/82.jpg'
  },
  {
    name: 'Stephen Rose',
    age: '27',
    gender: 'female',
    lookingfor: 'male',
    location: 'Atlanta',
    image: 'https://randomuser.me/api/portraits/women/46.jpg'
  },
  {
    name: 'Peter Smith',
    age: '34',
    gender: 'male',
    lookingfor: 'female',
    location: 'Miami FL',
    image: 'https://randomuser.me/api/portraits/men/89.jpg'
  }
];

const profiles = profileIterator(data);

nextProfile();

// Next Event 
document.getElementById('next').addEventListener('click', nextProfile);

// Next profile Display
function nextProfile() {
  const currentProfile = profiles.next().value;

  if(currentProfile !== undefined) {
    document.getElementById('profile-display').innerHTML = `
      <ul class="list-group">
        <li class="list-group-item">Name: ${currentProfile.name}<li>
        <li class="list-group-item">Age: ${currentProfile.age}<li>
        <li class="list-group-item">Location: ${currentProfile.location}<li>
        <li class="list-group-item">Preference: ${currentProfile.gender} looking for ${currentProfile.lookingfor}<li>
      </ul>
    `;

    document.getElementById('image-display').innerHTML = `<img src="${currentProfile.image}">`;
  } else {
    // No more Profiles
    window.location.reload();
  }
}

// Profile Iterator
function profileIterator(profiles){
  let nextIndex = 0;

  return {
    next: function() {
      return nextIndex < profiles.length ?
      { value: profiles[nextIndex++], done: false } : 
      { done: true }
    }
  };
}