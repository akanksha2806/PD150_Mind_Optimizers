package com.example.mind_optimizers_android_app;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;

import androidx.annotation.NonNull;
import androidx.appcompat.app.ActionBarDrawerToggle;
import androidx.appcompat.app.AppCompatActivity;
import androidx.drawerlayout.widget.DrawerLayout;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.view.MenuItem;
import android.widget.TextView;
import android.widget.Toast;

import com.google.android.material.navigation.NavigationView;
/*
public class HomeActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_home);
    }
}
*/
/*
import android.app.Activity;
import android.content.Intent;
import android.database.sqlite.SQLiteDatabase;
import android.support.annotation.NonNull;
import android.support.design.widget.NavigationView;
import android.support.v4.widget.DrawerLayout;
import android.support.v7.app.ActionBarDrawerToggle;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.MenuItem;
import android.widget.TextView;
import android.widget.Toast;
*/
public class HomeActivity extends AppCompatActivity implements NavigationView.OnNavigationItemSelectedListener{
    private DrawerLayout mDrawerLayout;
    private ActionBarDrawerToggle mToggle;
    TextView tv;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_home);
        Intent intent=getIntent();
        // String names=intent.getStringExtra("Names");


        mDrawerLayout = (DrawerLayout) findViewById(R.id.drawer);
        mToggle = new ActionBarDrawerToggle(this,mDrawerLayout,R.string.open,R.string.close);
        mDrawerLayout.addDrawerListener(mToggle);
        mToggle.syncState();
        getSupportActionBar().setDisplayHomeAsUpEnabled(true);
        NavigationView navigationView =(NavigationView) findViewById(R.id.navigation_view);
        navigationView.setNavigationItemSelectedListener(this);


    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        if(mToggle.onOptionsItemSelected(item))
        {
            return true;
        }
        return super.onOptionsItemSelected(item);
    }

    @Override
    public boolean onNavigationItemSelected(@NonNull MenuItem item) {
        int id = item.getItemId();
        if(id == R.id.home)
        {
            // Create a new intent to open the {@link NumbersActivity}
            Intent homeIntent = new Intent(HomeActivity.this, HomeActivity.class);

            // Start the new activity
            startActivity(homeIntent);
            Toast.makeText(this,"This is Home",Toast.LENGTH_LONG).show();
        }
        if(id == R.id.job)
        {
            // Create a new intent to open the {@link NumbersActivity}
            Intent cycleIntent = new Intent(HomeActivity.this, JobActivity.class);

            // Start the new activity
            startActivity(cycleIntent);
            Toast.makeText(this,"Look for Jobs!!",Toast.LENGTH_LONG).show();
        }
        /*
        if(id == R.id.chat)
        {
            // Create a new intent to open the {@link NumbersActivity}
            Intent chatIntent = new Intent(HomeActivity.this, Users.class);

            // Start the new activity
            startActivity(chatIntent);
            Toast.makeText(this,"Chat with others",Toast.LENGTH_LONG).show();
        }
        */

        if(id == R.id.health)
        {
            // Create a new intent to open the {@link NumbersActivity}
            Intent productIntent = new Intent(HomeActivity.this,HealthActivity.class);

            // Start the new activity
            startActivity(productIntent);
            Toast.makeText(this,"Take care of Yourself!!",Toast.LENGTH_LONG).show();
        }
        if(id == R.id.resources)
        {
            // Create a new intent to open the {@link NumbersActivity}
            Intent modulesIntent = new Intent(HomeActivity.this, ResourcesActivity.class);

            // Start the new activity
            startActivity(modulesIntent);
            Toast.makeText(this,"Resources!!",Toast.LENGTH_LONG).show();
        }
        if(id == R.id.scholarships)
        {
            // Create a new intent to open the {@link NumbersActivity}
            Intent modulesIntent = new Intent(HomeActivity.this, ScholarshipActivity.class);

            // Start the new activity
            startActivity(modulesIntent);
            Toast.makeText(this,"Scholarships!!",Toast.LENGTH_LONG).show();
        }
        if(id == R.id.settings)
        {
            // Create a new intent to open the {@link NumbersActivity}
            Intent settingsIntent = new Intent(HomeActivity.this, SettingsActivity.class);

            // Start the new activity
            startActivity(settingsIntent);

            //  FragranceDbHelper.delete();
            Toast.makeText(this,"Settings",Toast.LENGTH_SHORT).show();

        }
        /*
        if(id == R.id.log)
        {
            // Create a new intent to open the {@link NumbersActivity}
            Intent logsIntent = new Intent(HomeActivity.this, LoginSignup.class);

            // Start the new activity
            startActivity(logsIntent);

            //  FragranceDbHelper.delete();
            Toast.makeText(this,"Logged out",Toast.LENGTH_SHORT).show();

        }
*/
        return false;
    }
}