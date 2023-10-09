const TarForm = () => {
        return (
            <div>
              <form>
                <div>
                  <label htmlFor="amount">Set target</label>
                  <input type="number" name="amount" id="amount" />
                </div>
                <button>Reset</button>
              </form>
              <p>Current Saving: 100</p>
              <p>Target:2000</p>
              <progress max="100" value={20}/>
            </div>
    );
  };
  
  export default TarForm;
  