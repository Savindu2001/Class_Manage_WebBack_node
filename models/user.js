const UserSchema = new UserSchema({
    first_name:{
        type:String,
    },
    last_name:{
        type:String,
    },
    email:{
        type:String,
        required: true
    },
    password:{
        type:String,
        required: true
    }
})