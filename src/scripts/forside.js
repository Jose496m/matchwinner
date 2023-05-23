//https://lhlqzgpvydlodjfvvbru.supabase.co
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxobHF6Z3B2eWRsb2RqZnZ2YnJ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQ0Nzk0MDMsImV4cCI6MjAwMDA1NTQwM30.M5McXqusKfxEHBGbSXw15LL7maXShpRl7-Q-7oMgWeI

fetch("https://lhlqzgpvydlodjfvvbru.supabase.co/rest/v1/Matchwinner", {
  method: "GET",
  headers: { apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxobHF6Z3B2eWRsb2RqZnZ2YnJ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQ0Nzk0MDMsImV4cCI6MjAwMDA1NTQwM30.M5McXqusKfxEHBGbSXw15LL7maXShpRl7-Q-7oMgWeI" },
})
  .then((res) => res.json())
  .then(showData);

function showData(Matchwinner) {
  console.log(Matchwinner);
}
