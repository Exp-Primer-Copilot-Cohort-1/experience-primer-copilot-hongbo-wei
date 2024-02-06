function skillsMember() {
    return {
        name: 'Hongbo Wei',
        age: 29,
        skills: ['HTML', 'CSS', 'JS'],
        showSkills: function() {
            this.skills.forEach(function(skill) {
                console.log(`${this.name} knows ${skill}`);
            });
        }
    }
}